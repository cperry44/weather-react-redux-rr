import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={[50, 60, 40, 30]}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>56 {props.units}</div>
    </div>
  );
};
