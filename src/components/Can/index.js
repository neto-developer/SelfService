import { connect } from 'react-redux'

function checkAuth({ permission }, checkPermission) {
  if (checkPermission && !permission.includes(checkPermission)) {
    return false
  }
  return true
}
const Can = ({
  children, auth, checkPermission
}) => checkAuth(auth, checkPermission) && children;


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Can)
