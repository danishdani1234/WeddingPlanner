import React, { Component, useState } from "react";
import { Text, View, StyleSheet, YellowBox } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Picker,
	Form,
	Body,
	Thumbnail
} from "native-base";

const Dashboard = (props) => {
	const [selectedValue, setSelectedValue] = useState("Banquet Halls");


	/* onSelect(value){

	this.props.navigation.navigate("SearchEvent")({
	  selected:value

	});
  }*/

	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => props.navigation.goBack()}>
						<Icon name="keyboard-backspace" size={25} />
					</Button>
				</Left>
				<Body>
					<Text style={styles.textStyles}>Dashboard</Text>
				</Body>
				<Right>
					<Button
						transparent
						onPress={() => this.props.navigation.popToTop()}
					>
						<Icon name="exit-to-app" size={25} />
					</Button>
				</Right>
			</Header>

			<Content>
				<Thumbnail
					large
					style={{ left: 155, top: 50, marginBottom: 35 }}
					source={{
						uri:
							"https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png"
					}}
				/>

				<Text style={{ top: 35, fontSize: 13, left: 106 }}>
					50 days left until wedding day
					</Text>

				<Text style={{ fontWeight: "bold", fontSize: 18, top: 80, left: 83 }}>
					{" "}
						Select your Venue type?
					</Text>
				<Form style={{ marginTop: 100, marginBottom: 20, left: 120 }}>
					<Picker
						mode="dropdown"
						iosHeader="Select your Venue Type"
						iosIcon={<Icon name="arrow-down" />}
						style={{ width: 120 }}
						placeholder="select one"
						selectedValue={selectedValue}
						onValueChange={(value, index) => setSelectedValue(value)}
					>
						<Picker.Item label="Banquet Halls" value="Banquet Halls" />
						<Picker.Item label="Marquee" value="Marquee" />
						<Picker.Item label="RoofTop" value="RoofTop" />
					</Picker>
				</Form>

				<Button
					rounded
					danger
					style={{ left: 110, width: 180 }}
					onPress={() => {
						if (selectedValue === 'Marquee') { props.navigation.navigate("MarqueeHallList") }
						if (selectedValue === "RoofTop") { props.navigation.navigate("RoofTopHallList") }
						if (selectedValue == "Banquet Halls") { props.navigation.navigate("BanqueetHallList") }
					}}
				>
					<Text style={{ paddingLeft: 65 }}>Search</Text>
				</Button>

				<Text
					style={{
						fontSize: 18,
						left: 135,
						top: 20,
						marginBottom: 10,
						marginTop: 70
					}}
				>
					Follow us on{" "}
				</Text>
				<View style={{ margin: 20, paddingLeft: 25 }}>
					<Thumbnail
						style={{ left: 40 }}
						source={{
							uri:
								"https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png"
						}}
						size={10}
					/>
					<Thumbnail
						style={{ left: 115, bottom: 55 }}
						source={{
							uri:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU"
						}}
					/>
					<Thumbnail
						style={{ left: 190, bottom: 110 }}
						source={{
							uri:
								"https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg"
						}}
					/>
				</View>
			</Content>

			<Footer>
				<FooterTab style={{ padding: 2 }}>
					<Button
						onPress={() => props.navigation.navigate('DashBoardMain')}
						vertical active vertical
					>
						<Icon vertical active name="apps" />
						<Text>Dashboard</Text>

					</Button>

					<Button>
						<Icon name="apps" />
						<Text>Checklist</Text>
					</Button>
					<Button
						onPress={() => props.navigation.navigate('Guest')}
						vertical
					>
						<Icon name="apps" />
						<Text>Guests</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
}


const styles = StyleSheet.create({
	textStyles: {
		paddingLeft: "30%",
		fontSize: 20,
		color: "white"
	}
});
export default Dashboard;