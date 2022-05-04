/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function AddOffer(props) {
  const handler = (e) => {
    e.preventDefault();
    const reqBody = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      company_name: e.target.company_name.value,
      department_name: e.target.department_name.value,
      position_name: e.target.position_name.value,
      position_level: e.target.position_level.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
      notes: e.target.notes.value,
    };
    const port = 3000; // process.env.NODE_ENV === 'development' ? 3000 : 8080;
    const url = `http://localhost:${port}/newOffer`;

    let fetchStatus;
    fetch(url, {
      // <- returns a response asynchronously
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'no-cors',
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: 'follow', // manual, *follow, error
      body: JSON.stringify(reqBody), // body data type must match "Content-Type" header
    }).then((response) => {
      fetchStatus = response.status;
      return response.json();
    });
  };

  return (
    <form onSubmit={handler} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Yankun = Mewtwo. David = cyborg. Trey = master. Erica = Erica.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                First name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Last name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Company Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="company_name"
                  name="company_name"
                  type="text"
                  autoComplete="company_name"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="department_name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Department Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="department_name"
                  id="department_name"
                  autoComplete="department_name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="position_name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Position/Title
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="position_name"
                  id="position_name"
                  autoComplete="position_name"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="position_level"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Position Level
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="position_level"
                  id="position_level"
                  autoComplete="address-level2"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Salary
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  autoComplete="address-level1"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Date
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  autoComplete="date"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Additional Notes
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="notes"
                  id="notes"
                  autoComplete="notes"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => props.addOfferSwitch(false)}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

// class LoginBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { loggedIn: false };
//     this.onSubmit = this.onSubmit.bind(this);
//     // this.sendToSignUp = this.sendToSignUp.bind(this);
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     const port = 3000 // process.env.NODE_ENV === 'development' ? 3000 : 8080;
//     const url = `http://localhost:${port}/user/login`;
//     const loginObject = {
//       username: event.target.username.value,
//       password: event.target.password.value
//     };
//     let fetchStatus;
//     fetch(url, { // <- returns a response asynchronously
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       // mode: 'no-cors',
//       credentials: "include", // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       // redirect: 'follow', // manual, *follow, error
//       body: JSON.stringify(loginObject) // body data type must match "Content-Type" header
//     })
//       .then((response) => {
//         fetchStatus = response.status;
//         return response.json();
//       })
//       .then((data) => {
//         console.log('data: ', data);
//         if (fetchStatus === 200) {
//           console.log('login successful');
//           this.setState({ ...this.state, loggedIn: true });
//           this.props.dispatchUsernameStorage({userId: data.username_id, nickname: data.nickname});
//           fetch(`http://api.airvisual.com/v2/nearest_city?key=${process.env.API_KEY}`)
//             .then(data => data.json())
//             .then((data) => {
//               console.log('data: ', data);
//               this.props.dispatchSearchLocation(data);
//             })
//             .catch(error => console.log('error in api get request: ', error));
//         }
//         else alert('Login error');
//       });
//   }

//   // render() {
//   //   console.log('loggedIn: ', this.state.loggedIn);
//   //   return this.state.loggedIn ? <Navigate to="/dashboard" /> : ( // <Navigate to="/login"/>;
//   //     <div id="LoginBox">
//   //       <img src="https://i.postimg.cc/bJFm9CBf/WEATHER-WATCHERS-1.png" id='loginHeader'></img>
//   //       <form id="loginForm" onSubmit={this.onSubmit}>
//   //         <div className="inputContainer">
//   //           {/* <span>Username: </span>  */}
//   //           <input name="username" id="loginUsernameInput" type="text" placeholder='username'></input>
//   //         </div>

//   //         <div className="inputContainer">
//   //           {/* <span>Password: </span>  */}
//   //           <input name="password" id="loginPasswordInput" type="password" placeholder='password'></input>
//   //         </div>
//   //         <div className='buttonContainer'>
//   //           <button className="loginPageButton" type="submit" >Log In</button>

//   //           <Link className="loginPageButton" to={'/signup'}>Sign Up</Link>
//   //         </div>
//   //       </form>
//   //     </div>
//   //   )

//   // };
// };
