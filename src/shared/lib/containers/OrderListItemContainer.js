/* @flow */
import { connect } from "react-redux";
import { updateQuantity } from "shared/lib/actions/checkoutActions";
import OrderListItem from "shared/lib/components/OrderListItem";

export default connect(
  state => ({
    dishQuantity: state.checkout.quantity,
    dishPrice: state.checkout.price,
  }),
  {
    updateQuantity,
  },
)(OrderListItem);
