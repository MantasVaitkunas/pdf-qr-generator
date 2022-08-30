import React from 'react';
import {PDFViewer} from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";
import {PDFDownloadLink} from "@react-pdf/renderer";
import QrCode from "./QrCode";
import html2canvas from "html2canvas";

class App extends React.Component {
    state = {qrCodeImage: ''}

    render = () => {
        let qrCodeText = 'https://google.com';
        if (this.state.qrCodeImage === '') {
            return <QrCode url={qrCodeText}></QrCode>;
        }
        const document = <PdfDocument
            name="Mr. Johnson"
            address="949 Manor Street"
            city="Avon Lake"
            companyName="Super Duper Company"
            companyAddress="877 N. Winding Way St."
            companyCity="Green Cove Springs"
            date="15.07.2022"
            logoInMiddleOfQr="react_logo.png"
            qrImage={this.state.qrCodeImage}
        />;
        return (
            <div>
                <PDFDownloadLink document={document} fileName="file.pdf">
                    {({ loading}) =>
                        loading ? 'Loading document...' : 'Download file!'
                    }
                </PDFDownloadLink>
                <br/>
                <PDFViewer height="1000px" width="1000px">
                    {document}
                </PDFViewer>
            </div>
        );

    }

    componentDidMount() {
        const baseObject = this;
        html2canvas(document.querySelector('#react-qrcode-logo'))
            .then(function (canvas) {
                baseObject.setState({qrCodeImage: canvas.toDataURL()})
            });
    }
}

export default App;