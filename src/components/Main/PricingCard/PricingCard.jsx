import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import styles from "./PricingCard.module.scss";
import Button from "@/components/Button/Button";

const PricingCard = ({
  planName,
  price,
  period,
  features,
  buttonText,
  buttonAction,
}) => {
  return (
    <div className={styles.cardPricingContainer}>
      <Card className={styles.pricingCard}>
        <Card.Body>
          <Card.Title className={styles.title}>{planName}</Card.Title>
          <Card.Text className={styles.price}>
            {price} <small>/ {period}</small>
          </Card.Text>
          <ListGroup className={styles.listGroup} variant="flush">
            {features.map((feature, index) => (
              <ListGroup.Item className={styles.itemList} key={index}>
                {feature}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            text={buttonText}
            onClick={buttonAction} // Pasar la función de acción personalizada
            className={styles.pricingButton}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default PricingCard;
