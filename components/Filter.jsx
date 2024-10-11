import React from 'react'
import { Autoslider } from './Autoslider'

import book1 from "../puplic/images/book_01.jpg"
import book2 from "../puplic/images/book_02.jpg"
import book3 from "../puplic/images/book_03.jpg"
import book4 from "../puplic/images/book_04.jpg"
import book5 from "../puplic/images/book_05.jpg"
import book6 from "../puplic/images/book_06.jpg"
import book7 from "../puplic/images/book_07.jpg"
import book8 from "../puplic/images/book_08.jpg"
import book9 from "../puplic/images/book_09.jpg"
import book10 from "../puplic/images/book_10.jpg"
import book11 from "../puplic/images/book_11.jpg"
import book12 from "../puplic/images/book_12.jpg"
import book13 from "../puplic/images/book_13.jpg"
import book14 from "../puplic/images/book_14.jpg"




const bestSelling = [
    { src: book1 , title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: book2 , title: 'Conviction', author: 'Denise Mina' },
    { src: book3 , title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: book4 , title: 'Harry Poter', author: 'Liz Moore' },
    { src: book5 , title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: book6 , title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: book7 , title: 'Irom Flame', author: 'Tessa Bailey' },
]
const trending = [
    { src: book1 , title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: book2 , title: 'Conviction', author: 'Denise Mina' },
    { src: book3 , title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: book4 , title: 'Harry Poter', author: 'Liz Moore' },
    { src: book5 , title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: book6 , title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: book7 , title: 'Irom Flame', author: 'Tessa Bailey' },
]


export const Filter = () => {
  return (
    <div className='mt-60'>
       
        <Autoslider images = {bestSelling} duration ={20}/>
        <Autoslider images = {trending} duration ={25}/>
    </div>
  )
}
