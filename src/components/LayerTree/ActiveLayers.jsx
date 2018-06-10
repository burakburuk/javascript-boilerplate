import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper'
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableActiveLayersItem from './DraggableActiveLayersItem.jsx';
import MessageBox from '../../utils/MessageBox.jsx';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
    },
    dragArea: {
        width: 400,
    }
});

@DragDropContext(HTML5Backend)
class ActiveLayers extends React.Component {

    constructor(props) {
        super(props);
        this.moveCard = this.moveCard.bind(this);

        this.state = {
            checked: ['layer1'],
            sliderValue: {},
            openSnackbar: false,
            snackMessage: "",
            cards: [
                {
                    id: 'layer1',
                    text: 'Layer 1',
                },
                {
                    id: 'layer2',
                    text: 'Layer 2',
                },
                {
                    id: 'layer3',
                    text: 'Layer 3',
                },
                {
                    id: 'layer4',
                    text: 'Layer 4',
                },
            ],
        }
    }

    moveCard(dragIndex, hoverIndex) {
        const {cards} = this.state;
        const dragCard = cards[dragIndex];

        this.setState(
            update(this.state, {
                cards: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )
    }

    handleToggle = (value) => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    onSliderChange = (item) => {
        const {sliderValue} = this.state;
        sliderValue[item.name] = item;
        this.setState({
            sliderValue: sliderValue,
        });
    };

    removeLayer = (layerId) => {
        this.setState({ openSnackbar: true });
    };

    handleSnackbarClose = () => {
        this.setState({ openSnackbar: false });
    };

    render() {
        const {classes} = this.props;
        const {cards, openSnackbar} = this.state;

        return (
            <div className={classes.dragArea}>
                <List dense={true}>
                    {cards.map((card, i) => (
                        <DraggableActiveLayersItem
                            key={card.id}
                            index={i}
                            id={card.id}
                            text={card.text}
                            moveCard={this.moveCard}
                            handleToggle={this.handleToggle}
                            checked={this.state.checked}
                            onSliderChange={this.onSliderChange}
                            sliderValue={this.state.sliderValue}
                            removeLayer={this.removeLayer}
                        ></DraggableActiveLayersItem>
                    ))}
                </List>
                <MessageBox message={this.state.snackMessage}></MessageBox>
            </div>
        )
    }
}

ActiveLayers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActiveLayers);