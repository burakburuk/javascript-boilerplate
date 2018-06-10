import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import {DragSource, DropTarget} from 'react-dnd'
import ItemTypes from './DraggableItemTypes.jsx';
import {withStyles} from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CenterFocusWeak from '@material-ui/icons/CenterFocusWeak';
import DeleteForever from '@material-ui/icons/DeleteForever';
import EventNote from '@material-ui/icons/EventNote';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const style = {
    cursor: 'move',
};

const styles = {
    size: {
        width: 16,
    },
    button: {
        width: 32, height: 32,
        padding: 0,
    },
};

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
};

@DropTarget(ItemTypes.CARD, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))
@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))

class DraggableActiveLayersItem extends Component {

    render() {
        const {
            text,
            isDragging,
            connectDragSource,
            connectDropTarget,
            checked,
            sliderValue
        } = this.props;
        const opacity = isDragging ? 0 : 1;
        const {classes} = this.props;

        return connectDragSource(
            connectDropTarget(
                <div style={{...style, opacity}}>
                    <ListItem>
                        <Checkbox color="primary" className={classes.size}
                                  tabIndex={-1}
                                  disableRipple
                                  onChange={() => {
                                      this.props.handleToggle(this.props.id);
                                  }}
                                  checked={checked.indexOf(this.props.id) !== -1}
                        />
                        <ListItemText disableTypography primary={text}
                                      secondary={
                                          <Slider min={0} max={100} defaultValue={100}
                                                  style={{width: '70%'}}
                                                  value={sliderValue[this.props.id] !== undefined ? sliderValue[this.props.id].value : 0}
                                                  onChange={(value) => {
                                                      let item = {
                                                          name: this.props.id.toString(),
                                                          value: value
                                                      };
                                                      this.props.onSliderChange(item);
                                                  }}/>
                                      }/>
                        <ListItemSecondaryAction>
                            <IconButton style={styles.button}>
                                <EventNote style={{fontSize: 20}} color="primary"/>
                            </IconButton>
                            <IconButton style={styles.button}>
                                <CenterFocusWeak style={{fontSize: 20}} color="primary"/>
                            </IconButton>
                            <IconButton onClick={this.props.removeLayer} style={styles.button} aria-label="Delete">
                                <DeleteForever style={{fontSize: 20}} color="secondary"/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>),
        )
    }
}

DraggableActiveLayersItem.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    checked: PropTypes.array.isRequired,
    sliderValue: PropTypes.object.isRequired,
};

DraggableActiveLayersItem.defaultProps = {
    connectDragSource: function () {
        throw new Error("connectDragSource is not implemented!");
    },
    connectDropTarget: function () {
        throw new Error("connectDropTarget is not implemented!");
    },
    isDragging: false,
    checked: [],
    sliderValue: {}
};

export default withStyles(styles)(DraggableActiveLayersItem);