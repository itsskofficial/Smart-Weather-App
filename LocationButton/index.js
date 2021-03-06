//The LocationButton Component
import React,{Component} from 'react';
import Button from './../Button';
import styles from './styles';
const style={backgroundColor:'#DDDDDD'};
class LocationButton extends Component
	{
	_onPress()
		{
		navigator.geolocation.getCurrentPosition
			(
			initialPosition=>
				{
				this.props.onGetCoords
					(
					initialPosition.coords.latitude,
					initialPosition.coords.longitude
					);
				},
			error=>
				{
				alert(error.message);
				},
			{enableHighAccuracy:true,timeout:20000,maximumAge:1000}
			);
		}
	render()
		{
		return
			(
			<Button
				label='Use Current Position'
				style={style}
				onPress={this._onPress.bind(this)}/>
			);
		}
	}
export default LocationButton;