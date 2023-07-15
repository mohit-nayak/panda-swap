import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './AppButton.module.scss';

const AppButton = (
    {
        text = "Button text",
        variant = "light",
        onClick = () => {},
        styleClasses = [],
    }
) => {
    const classes = [styles.AppButton, ...styleClasses];

    switch (variant) {
        case "light":
            classes.push(styles.Light);
            break;

        case "dark":
            classes.push(styles.Dark);
            break;

        default:
            break;
    }

    return (
        <Button onClick={onClick}
                className={classes.join(' ')}>
            { text }
        </Button>
    );
};

export default AppButton;
