import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import Container from '../../components/Container/Container';
import DetailsPart from '../../components/DetailsPart/DetailsPart';
import DetailsStroke from '../../components/DetailsPart/DetailsStroke/DetailsStroke';
import BookingForm from '../../components/BookingForm/BookingForm';
import FavoriteIcon from '../../components/FavoriteIcon/FavoriteIcon';

import { fetchCarById } from '../../api/carsApi';

import {
  formatDistance,
  getCity,
  getCountry,
  getShortId,
  upperFirst,
} from '../../utils/functions';

import { calendar, carIcon, location, fuel, gear } from '../../assets/index';

import css from './CatalogItemPage.module.css';

const CatalogItemPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCar = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCarById(id);
        setCar(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCar();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!car) return <p>No car found.</p>;

  return (
    <main>
      <section className={css.section}>
        <Container>
          <div className={css.carDetailsPage}>
            <div className={css.carImage}>
              <img src={car.img} alt={car.brand} />
              <FavoriteIcon car={car} big={true} />
            </div>

            <div className={css.carSummary}>
              <div className={css.row1}>
                <h3 className={css.name}>
                  {car.brand} {car.model}, {car.year}
                </h3>
                <span className={css.id}>{getShortId(car.id)}</span>
              </div>
              <div className={css.row2}>
                <ReactSVG src={location} className={css.location} />
                <p>{getCity(car.address)}, </p>
                <p>{getCountry(car.address)}</p>
                <p>Mileage: {formatDistance(car.mileage)}</p>
              </div>
              <p className={css.price}>${car.rentalPrice}</p>
              <p className={css.description}>{car.description}</p>
            </div>

            <div className={css.carDetails}>
              <DetailsPart title="Rental Conditions: ">
                {car &&
                  car.rentalConditions.map((item, index) => (
                    <DetailsStroke key={index} text={item} />
                  ))}
              </DetailsPart>

              <DetailsPart title="Car Specifications:">
                <DetailsStroke icon={calendar} text={`Year: ${car.year}`} />
                <DetailsStroke
                  icon={carIcon}
                  text={`Type: ${upperFirst(car.type)}`}
                />
                <DetailsStroke
                  icon={fuel}
                  text={`Fuel Consumption: ${car.fuelConsumption}`}
                />
                <DetailsStroke
                  icon={gear}
                  text={`Engine Size: ${car.engineSize}`}
                />
              </DetailsPart>

              <DetailsPart title="Accessories and functionalities: ">
                {car &&
                  [
                    ...(car.accessories || []),
                    ...(car.functionalities || []),
                  ].map((item, index) => (
                    <DetailsStroke key={index} text={item} />
                  ))}
              </DetailsPart>
            </div>

            <div className={css.orderForm}>
              <BookingForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CatalogItemPage;
