// // NoticeBoard.js
import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import './NoticeBoard.css';
import Navigation from './Navigation'

const NoticeBoard = ({ notices }) => {
  return (
   <><Navigation/>
    <div className="notice-board">
      <h2>Notice Board</h2>
      <ListGroup>
        {notices.map((notice, index) => (
          <ListGroup.Item key={index}>
            <p>{notice.text}</p>
            {notice.image && <Image src={URL.createObjectURL(notice.image)} alt="Selected" fluid />}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
   </>
  );
};

export default NoticeBoard;

// import React, { Component } from 'react';
// import Slider from 'react-animated-slider';
// // import 'react-animated-slider/build/horizontal.css';
// import './NoticeBoard.css';
// class NoticeBoard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       items: [
//         {
//           id: 1,
//           type: 'text',
//           content: '',
//           user: '',
//           timestamp: Date.now(),
//           profileimg: '',
//         },
//         {
//           id: 2,
//           type: 'image',
//           imageURL: '',
//           user: '',
//           timestamp: Date.now() - 10000,
//           profileimg: '',
//         },
//         {
//           id: 3,
//           type: 'video',
//           videoURL: '',
//           user: '',
//           timestamp: Date.now() - 20000,
//           profileimg: '',
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className='container'>
//         <div className="display-slider-item">
//           {this.state.items.length ?
//             <Slider className="slider-wrapper" autoplay={30000} duration={30000}>
//               {this.state.items.map((item, index) => (
//                 <div
//                   key={index}
//                   className="slider-content"
//                   style={{ background: `url("/default-bg.jpg") no-repeat center center` }}
//                 >
//                   {item.type === 'text' && (
//                     <div className="inner">
//                       <p><b>{item.content}</b></p>
//                     </div>
//                   )}
//                   {item.type === 'image' && (
//                     <div className="inner inner-adjust">
//                       <div className="column-2 col-1">
//                         {item.imageURL && <p className="image-container"><img className="image-slider" src={item.imageURL} alt={item.user} /></p>}
//                       </div>
//                       <div className="column-2 col-2">
//                         {/* add additional details for image notices */}
//                       </div>
//                     </div>
//                   )}
//                   {item.type === 'video' && (
//                     <div className="inner">
//                       {item.videoURL && <video controls className="video-slider"><source src={item.videoURL} type="video/mp4" /></video>}
//                     </div>
//                   )}
//                   <section>
//                     <img src={item.profileimg} alt={item.user} />
//                     <span>
//                       Posted by <strong>{item.user}</strong>
//                     </span>
//                   </section>
//                 </div>
//               ))}
//             </Slider>
//             :
//             <div className="slider-content notice-board-empty" style={{ background: `url("/default-bg.jpg") no-repeat center center` }}>
//               <div className="inner">
//                 <p><b>NoticeBoard is empty</b></p>
//               </div>
//             </div>
//           }
//         </div>
//       </div>
//     );
//   }
// }

// export default NoticeBoard;