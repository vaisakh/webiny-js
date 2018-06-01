import React from "react";
import { Component } from "webiny-app";
import SlateEditor from "./../slateEditor/Slate";

const Widget = ({ widget: { data }, Bind, modules: { Icon } }) => {
    return (
        <div>
            {data.icon && (
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Icon icon={data.icon.icon} size={data.iconSize} />
                </div>
            )}
            <Bind>
                <SlateEditor name="text" />
            </Bind>
        </div>
    );
};

export default Component({ modules: ["Icon"] })(Widget);
