// import { NavLink, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux'
// import { logoutUser } from "../../../redux/actionCreators/authActionCreator";
// import { useEffect } from "react";


// const Header = () => {
//   const userSession = useSelector((store) => store.authReducer.userSession);
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(logoutUser());
//   }, [dispatch]);

//   return (

//     /* <nav>
//       <div className="nav-wrapper">
//         <Link className="brand-logo" to="/">
//           Logo
//       </Link>
//         <ul>
//           <li>
//             <Link className="brand-logo center" to="/tournament/new">
//               Создать турнир
//           </Link>
//           </li>
//         </ul>
//         <ul id="nav-mobile" className="right">
//           <li>{userSession && `Привет, ${userSession.login}`}</li>
//           <li>
//             <NavLink to="/rating">Рейтинг</NavLink>
//           </li>
//           {userSession && userSession ? (
//             <>
//               <li>
//                 <NavLink to="/profile">Профиль</NavLink>
//               </li>
//               <li>
//                 <Link to="" onClick={() => dispatch(logoutUser())}>
//                   Выйти
//               </Link>
//               </li>
//             </>
//           ) : (
//               <>
//                 <li>
//                   <NavLink to="/signin">Войти</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/signup">Зарегистрироваться</NavLink>
//                 </li>
//               </>
//             )}
//         </ul>
//       </div>
//     </nav> */
//   );
// };

// export default Header;
