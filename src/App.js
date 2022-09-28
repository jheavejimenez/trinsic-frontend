import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import { UserContext } from "./context/UserContext";
import { DidContext } from "./context/DidContext";
import Dashboard from "./pages/admin/Dashboard";
import Admin from "./pages/admin/Admin";
import Certificate from "./pages/user/Certificate";
import OTP from "./pages/user/OTP";
import Form from "./pages/user/Form";
import SigninForm from "./pages/user/SigninForm";
import WalletLoginForm from "./pages/user/WalletLoginForm";
import SchemaDashboard from "./pages/admin/SchemaDashboard";
import AddSchema from "./pages/admin/AddSchema";


function App() {
    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
    });
    const [did, setDid] = useState({ did: '' });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <DidContext.Provider value={{ did, setDid }}>
                <div>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path={"/sign-in"} element={<SigninForm />} />
                        <Route path={"/request-certificate"} element={<Form />} />
                        <Route path={"/confirmation-code"} element={<OTP />} />
                        <Route path={"/wallet/login"} element={<WalletLoginForm />} />
                        <Route path={"/certificates"} element={<Certificate />} />
                        <Route path={"/admin"} element={<Admin />} />
                        <Route path={"/admin/schema"} element={<SchemaDashboard />} />
                        <Route path={"/admin/add-schema"} element={<AddSchema />} />
                    </Routes>
                </div>
            </DidContext.Provider>
        </UserContext.Provider>
    );
}


export default App;
