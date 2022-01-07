//Forecast Component
import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
class Forecast extends Component
	{
	render()
		{
		return
		(
		<View style={styles.foreCast}>
			<Text style=>{this.props.temp} F
			</Text>
			<Text style=>{this.props.main}
			</Text>
		</View>
		);
		}
	}
const styles=StyleSheet.create({forecast:{alignItems:'center'});
export default Forecast;