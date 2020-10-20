import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from "../Theme";

import ManageCarriers from '../ManageCarriers';

export default {
  title: 'ManageCarriers',
  component: ManageCarriers,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <ManageCarriers
            ui={{
                layout: EmptyLayout
            }}
            api={{
                collectCarriers: (onReturn) => {
                    onReturn([
                        {
                            id: "1",
                            type: "mobile",
                            country: "US",
                            mcc: "mcc-1",
                            mnc: "mnc-1",
                            names: ["name-1", "name-2"]
                        },
                        {
                            id: "2",
                            type: "mobile",
                            country: "US",
                            mcc: "mcc-2",
                            mnc: "mnc-2",
                            names: ["name-3", "name-4"]
                        },
                        {
                            id: "3",
                            type: null,
                            country: "US",
                            mcc: "mcc-3",
                            mnc: "mnc-3",
                            names: ["name-5"]
                        },
                    ]);
                },
                typifyCarrier: (id, type, onReturn) => {
                },
            }}
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

