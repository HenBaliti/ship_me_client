import "./App.css";
import { AccountBox } from "./components/accountBox";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/Profile";
import AccountPage from "./Pages/AccountPage";
import CompanyPage from "./Pages/Company";
import CompaniesPage from "./Pages/Companies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewUserPage from "./Pages/NewUser";
import NewCompanyPage from "./Pages/NewCompany";
import EditUserCompany from "./Pages/EditUserCompany";
import EditCompanyPage from "./Pages/EditCompanyPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/createnewcompany" component={NewCompanyPage} />
          <Route exact path="/createnewuser" component={NewUserPage} />
          <Route exact path="/company" component={CompanyPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/companies" component={CompaniesPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth" component={AccountBox} />
          <Route exact path="/editUser" component={EditUserCompany} />
          <Route exact path="/editCompany" component={EditCompanyPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
