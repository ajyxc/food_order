/* @flow */
import { connect } from "react-redux";
import { updateQuantity } from "shared/lib/actions/checkoutActions";
import OrderList from "shared/lib/components/OrderList";

export default connect(
  state => ({
    items: state.checkout,
  }),
  {
    updateQuantity,
  },
)(OrderList);
