import React from "react";
import {Document, Page, StyleSheet, Text, View, Image, Font} from "@react-pdf/renderer";

Font.register({
    family: 'Montserrat-Regular',
    src: './Montserrat-Regular.ttf'
});
Font.register({
    family: 'Montserrat-Bold',
    src: './Montserrat-Bold.ttf'
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        paddingLeft: '50px',
        paddingRight: '50px',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    topImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    topContainer: {
        backgroundColor: 'white',
        marginTop: '50px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    bodyContainer: {
        marginTop: 80,
        width: '100%'
    },
    sectionLeft: {
        flexGrow: 2,
        width: '50%',
    },
    sectionRight: {
        flexGrow: 2,
        width: '50%',
        paddingLeft: 110
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    imagesContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 40,
        position: 'relative',
        height: 100
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 20,
        fontFamily: 'Montserrat-Bold',
    },
    paragraph: {
        paddingBottom: 20
    }
});

export default class QrCode extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render = () => {
        return (
            <Document>
                <Page size="A4" style= {styles.page}>
                    <View style={styles.topContainer}>
                        <View style={styles.sectionLeft}>
                            <Text>{this.props.name}</Text>
                            <Text>{this.props.address}</Text>
                            <Text>{this.props.city}</Text>
                        </View>
                        <View style={styles.sectionRight}>
                            <Text>{this.props.companyName}</Text>
                            <Text>{this.props.companyAddress}</Text>
                            <Text>{this.props.companyCity}</Text>
                            <Text style={{marginTop: 40}}>{this.props.date}</Text>
                        </View>
                    </View>

                    <View style={styles.bodyContainer}>
                        <Text style={styles.heading}>What is Lorem Ipsum?</Text>
                        <Text style={styles.paragraph}>Dear {this.props.name},</Text>
                        <Text style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula nulla, rhoncus quis diam nec, viverra
                            ornare sapien. Integer mollis magna quis eros lobortis rhoncus. Proin ut est in leo eleifend dapibus. Cras
                            molestie, ex nec varius dapibus, dolor ante pulvinar magna, quis eleifend diam elit sit amet orci. Fusce
                            venenatis dolor ac est luctus, vel sollicitudin nunc suscipit.</Text>
                        <Text style={styles.paragraph}>Quisque commodo nibh nec varius varius. Nulla nisl diam, varius non libero quis,
                            finibus pharetra ligula. Fusce suscipit magna sem, at rutrum quam lacinia vitae. Donec fermentum elit eros, at
                            bibendum arcu finibus vitae. Sed ac semper ante. Fusce pretium elit id nulla semper semper. Aliquam sed
                            vulputate lacus.</Text>
                        <View style={styles.sectionLeft}>
                            <View style={styles.imagesContainer}>
                                <Image style={{width: 130, position: 'absolute', left: 0, top: 0}} src={this.props.qrImage}></Image>
                                <View style={{
                                    position: 'absolute',
                                    width: 32,
                                    height: 32,
                                    left: 51,
                                    top: 51,
                                    borderRadius: '50%',
                                    backgroundColor: "white"
                                }}></View>
                                <Image src={this.props.logoInMiddleOfQr}
                                       style={{
                                           position: 'absolute',
                                           width: 30,
                                           height: 30,
                                           left: 52,
                                           top: 52,
                                           borderRadius: '50%'
                                       }}></Image>
                                <Image style={{position: 'absolute', width: 90, right: 20, top: 30}}
                                       src={{uri: 'scan-me-with-line.png'}}></Image>
                            </View>
                        </View>
                        <Text style={{marginTop: 50}}>Best regards</Text>
                    </View>
                </Page>
            </Document>
        );
    }
}
