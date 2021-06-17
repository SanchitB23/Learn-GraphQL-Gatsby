import React from 'react';
import {graphql} from "react-apollo";
import currentUserQuery from "../graphql/queries/currentUserQuery";
import {Link} from "react-router";
import logout from "../graphql/mutations/logout";

const Header = ({data, mutate}) => {
  const onLogoutClick = () => {
    mutate({
      refetchQueries: [{query: currentUserQuery}]
    })
  };

  const renderButtons = () => {
    if (data.loading) {
      return (
          <div className="preloader-wrapper small active" style={marginRight}>
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"/>
              </div>
              <div className="gap-patch">
                <div className="circle"/>
              </div>
              <div className="circle-clipper right">
                <div className="circle"/>
              </div>
            </div>
          </div>
      )
    }
    if (data.user) {
      return <button className="btn" style={marginRight}><a onClick={onLogoutClick}>Sign out</a></button>

    } else return (
        <ul>
          <li className="waves-effect waves-teal btn-flat"><Link onlyActiveOnIndex to="/auth/login">Login</Link></li>
          <li className="btn" style={marginRight}><Link onlyActiveOnIndex to="/auth/signup">Sign up</Link></li>
        </ul>
    )
  }

  return (
      <nav>
        <div className="nav-wrapper" style={flexbox}>
          <Link onlyActiveOnIndex to="/">Home</Link>
          {renderButtons()}
        </div>
      </nav>
  )
}

const marginRight = {
  marginRight: "20px"
}

const flexbox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}
export default graphql(logout)(graphql(currentUserQuery)(Header));
