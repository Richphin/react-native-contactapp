import React from 'react'
import {  StyleSheet, Text, View, ScrollView, FlatList} from 'react-native'
import Contact from '../components/Contact';

const Contactlist = () => {
    const contacts = [
		{
			name: 'Thomas Shelby',
			number: '+12487729378',
			image: require('../../assets/ts.jpg'),
		},

		{
			name: 'Apoka',
			number: '+41255637738',
            image: require('../../assets/chel.jpg'),
		},

		{
			name: 'Bryson Potts',
			number: '+14232852478',
            image: require('../../assets/nle.jpg'),
		},
        {
			name: 'Carissa Gardner',
			number: '+43875261134',
            image: require('../../assets/cg.jpg'),
		},
        {
			name: 'Richphin',
			number: '+1688868380',
            image: require('../../assets/rich3.jpg'),
		},
        {
			name: 'Scofield',
			number: '+13737993799',
            image: require('../../assets/ms.jpg'),
		},
        {
			name: 'Theodore B.',
			number: '+21199200108',
            image: require('../../assets/tb.png'),
		},
        {
			name: 'Sugar',
			number: '+121877819839',
            image: require('../../assets/sugar.jpg'),
		},
        {
			name: 'Saabo GH',
			number: '+2346718829',
            image: require('../../assets/saabo.jpg'),
		},
        {
			name: 'Kato Superstar',
			number: '+124357820038',
            image: require('../../assets/kato.jpg'),
		},
	];
    return (
        <View style={styles.container}>
			<FlatList
				data={contacts}
				renderItem={({ item }) => {
					return (
						<Contact
                        name={item.name}
                        number={item.number}
                        image={item.image}
                        />
					);
				}}
				keyExtractor={(item) => item.number}
			/>
		</View>
    )
}

export default Contactlist
const styles = StyleSheet.create({
	container: {
		flex: 1,
	// 	    alignItems: 'center',
    // justifyContent: 'center',
	
	},
});