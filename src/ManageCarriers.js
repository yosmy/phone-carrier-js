import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {Container, DangerButton, LinePlaceholder, PrimaryButton, Text} from "@yosmy/ui";

const ManageCarriers = ({
    ui, api
}) => {
    const [carriers, setCarriers] = useState(null);

    useEffect(
        () => {
            api.collectCarriers(
                // onReturn
                (carriers) => {
                    setCarriers(carriers);
                }
            )
        },
        [api]
    );

    return <ui.layout>
        {carriers === null
            ? <Container>
                <LinePlaceholder />
                <LinePlaceholder
                    margin={{
                        top: 2
                    }}
                />
            </Container>
            : <Container>
                <Container
                    flow="row"
                >
                    <Text width={300}>Tipo</Text>
                    <Text width={100}>Pais</Text>
                    <Text width={100}>Mcc</Text>
                    <Text width={100}>Mnc</Text>
                    <Text width={300}>Nombres</Text>
                </Container>
                {carriers.map((carrier) => {
                    return <ManageCarrier
                        key={carrier.id}
                        api={{
                            typifyCarrier: api.typifyCarrier,
                        }}
                        data={carrier}
                    />
                })}
            </Container>
        }
    </ui.layout>
}

ManageCarriers.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
    api: PropTypes.shape({
        collectCarriers: PropTypes,
    }).isRequired
};

const ManageCarrier = ({
    api, data, ...props
}) => {
    return <Container
        flow="row"
        margin={{
            top: 1
        }}
        {...props}
    >
        <ManageType
            ui={{
                layout: ({children, ...props}) => {
                    return <Container
                        width={300}
                        {...props}
                    >
                        {children}
                    </Container>
                }
            }}
            api={{
                typifyCarrier: api.typifyCarrier
            }}
            id={data.id}
            type={data.type}
        />
        <Text width={100}>{data.country}</Text>
        <Text width={100}>{data.mcc}</Text>
        <Text width={100}>{data.mnc}</Text>
        <ManageNames
            ui={{
                layout: ({children}) => {
                    return <Container width={600}>
                        {children}
                    </Container>
                }
            }}
            names={data.names}
        />
    </Container>
}

ManageCarrier.propTypes = {
    api: PropTypes.shape({
        typifyCarrier: PropTypes.func.isRequired,
    }).isRequired,
    data: PropTypes.shape({
        type: PropTypes.string,
        country: PropTypes.string.isRequired,
        mcc: PropTypes.string.isRequired,
        mnc: PropTypes.string.isRequired,
        names: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
};

const ManageType = ({
    ui, api, id, type: initialType
}) => {
    const [type, setType] = useState(initialType);

    return <ui.layout
        flow="row"
        align={{
            cross: "flex-start"
        }}
    >
        {type && <Container width={50}>
            <Text>{type}</Text>
        </Container>}
        <PrimaryButton
            margin={{
                left: type ? 1 : 0
            }}
            onClick={() => {
                setType("mobile");

                api.typifyCarrier(
                    id,
                    "mobile",
                    // onReturn
                    () => {}
                )
            }}
        >
            <Text>Mobile</Text>
        </PrimaryButton>
        <DangerButton
            margin={{
                left: 1
            }}
            onClick={() => {
                setType("voip");

                api.typifyCarrier(
                    id,
                    "voip",
                    // onReturn
                    () => {}
                )
            }}
        >
            <Text>Voip</Text>
        </DangerButton>
    </ui.layout>
}

const ManageNames = ({
    ui, names
}) => {
    return <ui.layout>
        {names.map((name, i) => {
            return <Text
                key={name}
                margin={{
                    top: i !== 0 ? 1 : 0
                }}
            >
                {name}
            </Text>
        })}
    </ui.layout>
};

ManageNames.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.object.isRequired,
    }).isRequired,
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ManageCarriers;