import { connect } from "react-redux";
import ThemeToggle from "../components/ThemeToggle";
import { toggleTheme } from "../redux/actions/themeActions";

const mapStateToProps = (state) => ({
  theme: state.theme.mode,
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: () => dispatch(toggleTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
