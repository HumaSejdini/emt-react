// import React from "react";
// import AuthorTerm from '../AuthorTerm/authorTerm';
// import {Link} from "react-router-dom";
// const authors = (props) => {
//
//     return (
//         <div className={"container mm-4 mt-5"}>
//             <div className={"row"}>
//                 <div className={"row"}>
//                     <table className={"table table-striped"}>
//                         <thead>
//                         <tr>
//                             <th scope={"col"}>Name</th>
//                             <th scope={"col"}> Surname</th>
//                             <th scope={"col"}> Country</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {props.authors?.map((term)=>{
//                             return(
//                                 <AuthorTerm term={term} />
//                                 // <tr>
//                                 //     <td>{term.name}</td>
//                                 //     <td>{term.category}</td>
//                                 //     <td>{term.availableCopies}</td>
//                                 //     <td>{term.author.name}</td>
//                                 // </tr>
//                             );
//                         })}
//                         </tbody>
//                     </table>
//                 </div>
//                 {/*<div className="col mb-3">*/}
//                 {/*    <div className="row">*/}
//                 {/*        <div className="col-sm-12 col-md-12">*/}
//                 {/*            <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>*/}
//                 {/*        </div>*/}
//                 {/*    </div>*/}
//                 {/*</div>*/}
//             </div>
//         </div>
//     );
// }
// export default authors;
import React from "react";

const authors = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}> Surname</th>
                            <th scope={"col"}> Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*key={term.id}*/}
                        {props.authors?.map((term)=>{
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.surname}</td>
                                    <td>{term.country.name}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default authors;