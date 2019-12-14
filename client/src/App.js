import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


//import routes
import LandingPage from "./routes/landingPage";
import PostsPage from "./routes/postsPage";
import PostPage from "./routes/postPage";
import UserProfilePage from "./routes/userProfilePage";
import AdminDashBoardPage from "./routes/adminDashBoardPage";
import AboutUsPage from "./routes/aboutUsPage";
import RegisterPage from "./routes/registerPage";
import LoginPage from "./routes/loginPage";

//import components
import FooterComponent from "./component/footerComponent";
import HeaderComponent from "./component/headerComponent";
import PostComponent from "./component/postComponent";
import headerComponent from "./component/headerComponent";

//initilize App class
class App extends React.Component {
  state = {
  
  };

  render() {
    // let { company, trainee, owner } = this.state;
    return (
      <Router>
    
          <HeaderComponent />
        
          <Route path='/' exact component={LandingPage} />
          <Route path='/about' exact component={AboutUsPage} />
          <Route path='/postspage' exact component={PostsPage} />
          <Route path='/postspage' exact component={PostsPage} />
          <Route path='/postpage' exact component={PostPage} />
          <Route path='/userprofilepage' exact component={UserProfilePage} />
          <Route path='/admindashboardpage' exact component={AdminDashBoardPage} />
          <Route path='/registerpage' exact component={RegisterPage} />
          <Route path='/loginpage' exact component={LoginPage} />
          <Route path='/postspage' exact component={PostsPage} />

      <FooterComponent/>
      </Router>
    );
  }
}

export default App;
