import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import {AboutGame} from './Pages/AboutGame'
import {Home} from "./Pages/Home";
import {useState} from "react";
import realMadrid from './img/Real Madrid.png'
import oxfordUnited from './img/Oxford United.jpg'
import arsenal from './img/arsenal.png'
import valensia from './img/valensia.png'
import dinamoMinsk from './img/dinamo.png'
import kunLunRedStar from './img/kunlunredstar.jpg'


function App() {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                title: {
                        team1: {
                            name: "Оксфорд Юнайтед",
                            img: oxfordUnited,
                        },
                        team2: {
                            name: "Арсенал",
                            img: arsenal,
                        }
                },
                data: '13.01.23 12:00',
                coefficient: {
                    p1: 1.45,
                    x: 2.43,
                    p2: 2.04,
                }
            },
            {
                id: 2,
                title: {
                    team1: {
                        name: "Реал Мадрид",
                        img: realMadrid,
                    },
                    team2: {
                        name: "Валенсия",
                        img: valensia,
                    }
                },
                data: '13.01.23 12:00',
                coefficient: {
                    p1: 1.65,
                    x: 0.43,
                    p2: 2.34,
                }
            },
            {
                id: 3,
                title: {
                    team1: {
                        name: "Динамо Минск",
                        img: dinamoMinsk,
                    },
                    team2: {
                        name: "Куньлунь Ред Стар",
                        img: kunLunRedStar,
                    }
                },
                data: '13.01.23 12:00',
                coefficient: {
                    p1: 0.97,
                    x: 2.40,
                    p2: 1.67,
                }
            }
        ]
    )

  return (
          <div className="App">
              <div className={'container'}>
                  <header>
                      <div className={'menu'}>
                          <Link to='/'>Home</Link>
                      </div>
                  </header>
                  <Routes>
                      <Route path='/' element={<Home items={items}/>}></Route>
                      {
                          items.map(item =>
                              <Route path={'/aboutGame' + '/' + item.id}
                                     element={<AboutGame
                                     img={item}
                                     title={item.title}
                                     data={item.data}
                                     coefficient={item.coefficient}/>}>
                              </Route>)
                      }
                  </Routes>
              </div>
          </div>
  );
}

export default App;
