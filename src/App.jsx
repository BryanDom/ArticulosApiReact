import React from "react";
import { ToastContainer } from "react-toastify";
import { Navigation } from "./routes";
import { AuthProvider } from "./context";

const App = () => {
  return (
    <div>
      <AuthProvider>
        {/* todo lo dentro es el children */}
        <Navigation />
        {/* la configurarion del toast  */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </AuthProvider>
    </div>
  );
};

export default App;
