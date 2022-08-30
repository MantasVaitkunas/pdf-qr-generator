import * as React from "react";
import { QRCode } from "@jackybaby/react-custom-qrcode";

class QrCode extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render = () => {
        const url = this.props.url;
        return (
            <QRCode
                value={url}
                qrStyle="dots"
                eyeRadius={[
                    { // top/left eye
                        outer: [10, 10, 0, 10],
                        inner: [10, 10, 0, 10],
                    },
                    [10, 10, 10, 0], // top/right eye
                    [10, 0, 10, 10], // bottom/left
                ]}
                eyeColor={['#01A651', '#62DAFB']}
                size="200"
                ecLevel="H"
            />
        );
    }

}

export default QrCode;
