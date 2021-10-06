import Header from "../../components/Header";
import * as S from "./styled";
import { ListWrapper } from '../../styles/styles';
import ListItem from "../../components/ListItem";
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export default function List(){

    //const [playlistDeezer, setPlaylistDeezer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const playlistDeezer = [
        {
          "id": 1391349252,
          "title": "Meu Pedaço de Pecado",
          "title_short": "Meu Pedaço de Pecado",
          "title_version": "",
          "link": "http://www.deezer.com/track/1391349252",
          "duration": 157,
          "rank": 999308,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-7.deezer.com/stream/c-70255a40b7c438c3239e94ba0c909128-3.mp3",
          "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
          "position": 1,
          "artist": {
            "id": 135512622,
            "name": "João Gomes",
            "link": "http://www.deezer.com/artist/135512622",
            "picture": "http://api.deezer.com/artist/135512622/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/135512622/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 234349272,
            "title": "Eu Tenho a Senha",
            "cover": "http://api.deezer.com/album/234349272/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/1000x1000-000000-80-0-0.jpg",
            "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
            "tracklist": "http://api.deezer.com/album/234349272/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1450435652,
          "title": "Chega E Senta (Ao Vivo)",
          "title_short": "Chega E Senta",
          "title_version": "(Ao Vivo)",
          "link": "http://www.deezer.com/track/1450435652",
          "duration": 153,
          "rank": 997128,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-7.deezer.com/stream/c-7d86698fd300e0e4a6c4a0e15bdb5c42-4.mp3",
          "md5_image": "4c57b85ae7da490d7ad6c01b2ee808d1",
          "position": 2,
          "artist": {
            "id": 138015062,
            "name": "John Amplificado",
            "link": "http://www.deezer.com/artist/138015062",
            "picture": "http://api.deezer.com/artist/138015062/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/5a1d7024ad7e532f687c8b57e0b8858c/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/5a1d7024ad7e532f687c8b57e0b8858c/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/5a1d7024ad7e532f687c8b57e0b8858c/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/5a1d7024ad7e532f687c8b57e0b8858c/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/138015062/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 248375742,
            "title": "Chega E Senta (Ao Vivo)",
            "cover": "http://api.deezer.com/album/248375742/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/4c57b85ae7da490d7ad6c01b2ee808d1/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/4c57b85ae7da490d7ad6c01b2ee808d1/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/4c57b85ae7da490d7ad6c01b2ee808d1/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/4c57b85ae7da490d7ad6c01b2ee808d1/1000x1000-000000-80-0-0.jpg",
            "md5_image": "4c57b85ae7da490d7ad6c01b2ee808d1",
            "tracklist": "http://api.deezer.com/album/248375742/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1442170372,
          "title": "Rolê",
          "title_short": "Rolê",
          "title_version": "",
          "link": "http://www.deezer.com/track/1442170372",
          "duration": 174,
          "rank": 973676,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-f.deezer.com/stream/c-f6bf603194f05469680cf4240641fb21-3.mp3",
          "md5_image": "58083a6d7a92ff7585f304e9d1934ad4",
          "position": 3,
          "artist": {
            "id": 84292982,
            "name": "Tarcísio do Acordeon",
            "link": "http://www.deezer.com/artist/84292982",
            "picture": "http://api.deezer.com/artist/84292982/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/84292982/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 246523402,
            "title": "Rolê",
            "cover": "http://api.deezer.com/album/246523402/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/1000x1000-000000-80-0-0.jpg",
            "md5_image": "58083a6d7a92ff7585f304e9d1934ad4",
            "tracklist": "http://api.deezer.com/album/246523402/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1243010562,
          "title": "Baby Me Atende",
          "title_short": "Baby Me Atende",
          "title_version": "",
          "link": "http://www.deezer.com/track/1243010562",
          "duration": 225,
          "rank": 984236,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-5.deezer.com/stream/c-553433e74ce6e98a172c93c013361627-3.mp3",
          "md5_image": "8b7b834417a1b86c6becd9873acdfee2",
          "position": 4,
          "artist": {
            "id": 5566782,
            "name": "Matheus Fernandes",
            "link": "http://www.deezer.com/artist/5566782",
            "picture": "http://api.deezer.com/artist/5566782/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/5566782/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 207458032,
            "title": "Baby Me Atende",
            "cover": "http://api.deezer.com/album/207458032/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/1000x1000-000000-80-0-0.jpg",
            "md5_image": "8b7b834417a1b86c6becd9873acdfee2",
            "tracklist": "http://api.deezer.com/album/207458032/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1450292592,
          "title": "Arranhão (Ao Vivo)",
          "title_short": "Arranhão",
          "title_version": "(Ao Vivo)",
          "link": "http://www.deezer.com/track/1450292592",
          "duration": 153,
          "rank": 993200,
          "explicit_lyrics": true,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-7.deezer.com/stream/c-7a0cbcd2ee3363ace2cd26c4e0fe9c2d-4.mp3",
          "md5_image": "9d94b664c0ec2abaf3ab7df5429a9546",
          "position": 5,
          "artist": {
            "id": 4876653,
            "name": "Henrique & Juliano",
            "link": "http://www.deezer.com/artist/4876653",
            "picture": "http://api.deezer.com/artist/4876653/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/4876653/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 248346272,
            "title": "Arranhão (Ao Vivo)",
            "cover": "http://api.deezer.com/album/248346272/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/1000x1000-000000-80-0-0.jpg",
            "md5_image": "9d94b664c0ec2abaf3ab7df5429a9546",
            "tracklist": "http://api.deezer.com/album/248346272/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1421455182,
          "title": "Senta Danada",
          "title_short": "Senta Danada",
          "title_version": "",
          "link": "http://www.deezer.com/track/1421455182",
          "duration": 172,
          "rank": 971439,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-6.deezer.com/stream/c-689d79e57422002c7e78d335c278f04c-3.mp3",
          "md5_image": "b2c9b23ea852f37b6d7656871fe80716",
          "position": 6,
          "artist": {
            "id": 5576810,
            "name": "Zé Felipe",
            "link": "http://www.deezer.com/artist/5576810",
            "picture": "http://api.deezer.com/artist/5576810/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/5576810/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 241412452,
            "title": "Senta Danada",
            "cover": "http://api.deezer.com/album/241412452/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b2c9b23ea852f37b6d7656871fe80716",
            "tracklist": "http://api.deezer.com/album/241412452/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1404805642,
          "title": "Se Joga no Passinho",
          "title_short": "Se Joga no Passinho",
          "title_version": "",
          "link": "http://www.deezer.com/track/1404805642",
          "duration": 200,
          "rank": 997636,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-0.deezer.com/stream/c-0200f1c343a697cdd16d55a29c75bfb1-4.mp3",
          "md5_image": "e4ef2b0c37135fc5410b114af9830d64",
          "position": 7,
          "artist": {
            "id": 56731592,
            "name": "Brisa Star",
            "link": "http://www.deezer.com/artist/56731592",
            "picture": "http://api.deezer.com/artist/56731592/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/56731592/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 237363182,
            "title": "Se Joga no Passinho",
            "cover": "http://api.deezer.com/album/237363182/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/1000x1000-000000-80-0-0.jpg",
            "md5_image": "e4ef2b0c37135fc5410b114af9830d64",
            "tracklist": "http://api.deezer.com/album/237363182/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1391349282,
          "title": "Aquelas Coisas",
          "title_short": "Aquelas Coisas",
          "title_version": "",
          "link": "http://www.deezer.com/track/1391349282",
          "duration": 147,
          "rank": 995912,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-0.deezer.com/stream/c-0b9b2db9244ca982c80142a2bccd7b2c-3.mp3",
          "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
          "position": 8,
          "artist": {
            "id": 135512622,
            "name": "João Gomes",
            "link": "http://www.deezer.com/artist/135512622",
            "picture": "http://api.deezer.com/artist/135512622/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/135512622/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 234349272,
            "title": "Eu Tenho a Senha",
            "cover": "http://api.deezer.com/album/234349272/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/1000x1000-000000-80-0-0.jpg",
            "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
            "tracklist": "http://api.deezer.com/album/234349272/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1397165102,
          "title": "Ficha Limpa",
          "title_short": "Ficha Limpa",
          "title_version": "",
          "link": "http://www.deezer.com/track/1397165102",
          "duration": 192,
          "rank": 983356,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-1.deezer.com/stream/c-1a227d91a0177bd6e3756f4b369056c7-3.mp3",
          "md5_image": "f4ffd093b21dced29b7bffdda3b007be",
          "position": 9,
          "artist": {
            "id": 1541592,
            "name": "Gusttavo Lima",
            "link": "http://www.deezer.com/artist/1541592",
            "picture": "http://api.deezer.com/artist/1541592/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/1541592/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 235704972,
            "title": "Falando de Amor, Vol. 1",
            "cover": "http://api.deezer.com/album/235704972/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f4ffd093b21dced29b7bffdda3b007be",
            "tracklist": "http://api.deezer.com/album/235704972/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1391338992,
          "title": "Se For Amor",
          "title_short": "Se For Amor",
          "title_version": "",
          "link": "http://www.deezer.com/track/1391338992",
          "duration": 239,
          "rank": 993081,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "http://cdn-preview-d.deezer.com/stream/c-d471dd85a4f2c9a6436e909ff2f167a7-3.mp3",
          "md5_image": "2fae78d6bead261c21635c21de46dbd1",
          "position": 10,
          "artist": {
            "id": 135512622,
            "name": "João Gomes",
            "link": "http://www.deezer.com/artist/135512622",
            "picture": "http://api.deezer.com/artist/135512622/image",
            "picture_small": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/56x56-000000-80-0-0.jpg",
            "picture_medium": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/250x250-000000-80-0-0.jpg",
            "picture_big": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/500x500-000000-80-0-0.jpg",
            "picture_xl": "http://cdn-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "http://api.deezer.com/artist/135512622/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 234346602,
            "title": "Se For Amor",
            "cover": "http://api.deezer.com/album/234346602/image",
            "cover_small": "http://cdn-images.dzcdn.net/images/cover/2fae78d6bead261c21635c21de46dbd1/56x56-000000-80-0-0.jpg",
            "cover_medium": "http://cdn-images.dzcdn.net/images/cover/2fae78d6bead261c21635c21de46dbd1/250x250-000000-80-0-0.jpg",
            "cover_big": "http://cdn-images.dzcdn.net/images/cover/2fae78d6bead261c21635c21de46dbd1/500x500-000000-80-0-0.jpg",
            "cover_xl": "http://cdn-images.dzcdn.net/images/cover/2fae78d6bead261c21635c21de46dbd1/1000x1000-000000-80-0-0.jpg",
            "md5_image": "2fae78d6bead261c21635c21de46dbd1",
            "tracklist": "http://api.deezer.com/album/234346602/tracks",
            "type": "album"
          },
          "type": "track"
        }
      ]

    useEffect(()=>{

        async function getPlaylistFromRapidApi(){
           // const response = await api.get('/');
            //setPlaylistDeezer(response.data)
           // playlistDeezer.push(response)
        }

        getPlaylistFromRapidApi()

    }, [])


    return(
        <S.Section>
            <Header/>
            <ListWrapper>
                {
                    playlistDeezer.map((track)=>(
                        <ListItem key={track.id} props={track}/>
                    ))
                }        
            </ListWrapper>
        </S.Section>
    )
}