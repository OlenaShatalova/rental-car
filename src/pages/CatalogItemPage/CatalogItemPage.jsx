import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container/Container';

import DetailsPart from '../../components/DetailsPart/DetailsPart';
import DetailsStroke from '../../components/DetailsPart/DetailsStroke/DetailsStroke';

import { fetchCarById } from '../../api/carsApi';

import {
  formatDistance,
  getCity,
  getCountry,
  getShortId,
  upperFirst,
} from '../../utils/functions';

import calendar from '../../assets/calendar.svg';
import carIcon from '../../assets/car.svg';
import fuel from '../../assets/fuel.svg';
import gear from '../../assets/gear.svg';

import css from './CatalogItemPage.module.css';

function CatalogItemPage() {
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
        console.log(data);

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
            </div>

            <div className={css.carSummary}>
              <div>
                <p className={css.name}>
                  {car.brand} {car.model}, {car.year}
                </p>
                <span className={css.id}>{getShortId(car.id)}</span>
              </div>
              <div>
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

            <div className={css.orderForm}>OrderForm</div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default CatalogItemPage;
