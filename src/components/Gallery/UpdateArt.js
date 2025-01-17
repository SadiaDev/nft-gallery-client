import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import { updateArtwork, showArtwork } from '../../api/artwork'
import {
  updateArtworkSuccess
} from '../AutoDismissAlert/messages'
import {
  Typography,
  Grid,
  Button,
  Card,
  CardContent
} from '@mui/material'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import HttpIcon from '@mui/icons-material/Http'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PaletteIcon from '@mui/icons-material/Palette'
import EventIcon from '@mui/icons-material/Event'
import HistoryIcon from '@mui/icons-material/History'
import PublishIcon from '@mui/icons-material/Publish'
import NoteIcon from '@mui/icons-material/Note'
import TextFieldComponent from '../TextField/TextFieldComponent'
import { upload } from './Upload'

const UpdateArt = ({ msgAlert, user }) => {
  const { id } = useParams()
  const [card, setCard] = useState(null)
  const [artist, setArtist] = useState(card ? card.artist : '')
  const [price, setPrice] = useState(card ? card.price : '')
  const [title, setTitle] = useState(card ? card.title : '')
  const [imageUrl, setImageUrl] = useState(card ? card.imageUrl : '')
  const [releaseDate, setReleaseDate] = useState(card ? card.releaseDate : '')
  const [medium, setMedium] = useState(card ? card.medium : '')
  const [artistRoyalty, setArtistRoyalty] = useState(card ? card.artistRoyalty : '')
  const [curatorRoyalty, setCuratorRoyalty] = useState(card ? card.curatorRoyalty : '')
  const [provenance, setProvenance] = useState(card ? card.provenance : '')
  const [exhibitionHistory, setExhibitionHistory] = useState(card ? card.exhibitionHistory : '')
  const [publishingHistory, setPublishingHistory] = useState(card ? card.publishingHistory : '')
  const [notes, setNotes] = useState(card ? card.notes : '')
  const history = useHistory()

  const art = {
    artist: artist,
    title: title,
    price: price,
    imageUrl: imageUrl,
    releaseDate: releaseDate,
    medium: medium,
    artistRoyalty: artistRoyalty,
    curatorRoyalty: curatorRoyalty,
    provenance: provenance,
    exhibitionHistory: exhibitionHistory,
    publishingHistory: publishingHistory,
    notes: notes
  }

  const handleChangeArtist = (event) =>
    setArtist(event.target.value)

  const handleChangeTitle = (event) =>
    setTitle(event.target.value)

  const handleChangePrice = (event) =>
    setPrice(event.target.value)

  const handleChangeImageUrl = (event) =>
    setImageUrl(event.target.value)

  const handleChangeReleaseDate = (event) =>
    setReleaseDate(event.target.value)

  const handleChangeMedium = (event) =>
    setMedium(event.target.value)

  const handleChangeArtistRoyalty = (event) =>
    setArtistRoyalty(event.target.value)

  const handleChangeCuratorRoyalty = (event) =>
    setCuratorRoyalty(event.target.value)

  const handleChangeProvenance = (event) =>
    setProvenance(event.target.value)

  const handleChangeExhibitionHistory = (event) =>
    setExhibitionHistory(event.target.value)

  const handleChangePublishingHistory = (event) =>
    setPublishingHistory(event.target.value)

  const handleChangeNotes = (event) =>
    setNotes(event.target.value)

  useEffect(() => {
    showArtwork(id)
      .then((res) => {
        // setCard(res.data.artwork)
        const art = res.data.artwork
        setArtist(art.artist)
        setTitle(art.title)
        setPrice(art.price)
        setImageUrl(art.imageUrl)
        setReleaseDate(art.releaseDate)
        setMedium(art.medium)
        setArtistRoyalty(art.artistRoyalty)
        setCuratorRoyalty(art.curatorRoyalty)
        setProvenance(art.provenance)
        setExhibitionHistory(art.exhibitionHistory)
        setPublishingHistory(art.publishingHistory)
        setNotes(art.notes)
      })
  }, [id])

  const mintArtwork = async (data) => {
    console.log(data)
    console.log(data.publishingHistory)
    const hashUrl = await upload(data)
    console.log(hashUrl)
  }

  const onUpdateArtwork = (event) => {
    if (event) {
      event.preventDefault()
    }

    updateArtwork(id, art, user)
      .then((res) => {})
      .then(() =>
        msgAlert({
          heading: 'Update Artwork Success',
          message: updateArtworkSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/gallery'))
      .catch((error) => {
        msgAlert({
          heading: 'Update Art Failed',
          message: error.message,
          variant: 'error'
        })
      })
      .finally(() => {
        setArtist('')
        setTitle('')
        setPrice('')
        setImageUrl('')
        setReleaseDate('')
        setMedium('')
        setArtistRoyalty('')
        setCuratorRoyalty('')
        setExhibitionHistory('')
        setPublishingHistory('')
        setProvenance('')
        setNotes('')
      })
  }

  const handleKeypress = (event) => {
    // it triggers by pressing the enter key
    if (event.keyCode === 13 || event.which === 13) {
      onUpdateArtwork()
    }
  }

  return (
    <>
      <Grid style={{ paddingTop: '150px' }} container justify='center'>
        <Grid item xs>
          <div></div>
        </Grid>
        <Grid item xs={11} sm={9} md={8} lg={6} xl={4}>
          <Card style={{ backgroundColor: 'gray' }}>
            <CardContent style={{ color: 'white' }}>
              <Grid container>
                <Grid item>
                  <PublishIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Update Your Artwork</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'artist'}
                    label={'Artist'}
                    icon={<AccountCircle sx={{ color: 'white' }} />}
                    value={artist}
                    onChange={handleChangeArtist}
                  />
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'title'}
                      label={'Title'}
                      icon={<ArtTrackIcon sx={{ color: 'white' }} />}
                      value={title}
                      onChange={handleChangeTitle}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={false}
                      id={'price'}
                      label={'Price (eth)'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      value={price}
                      onChange={handleChangePrice}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'imageUrl'}
                      label={'Image URL'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      value={imageUrl}
                      onChange={handleChangeImageUrl}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'releaseDate'}
                      label={'Release Date'}
                      icon={<EventIcon sx={{ color: 'white' }} />}
                      value={releaseDate}
                      onChange={handleChangeReleaseDate}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'medium'}
                      label={'Medium'}
                      icon={<PaletteIcon sx={{ color: 'white' }} />}
                      value={medium}
                      onChange={handleChangeMedium}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'artistRoyalty'}
                      label={'Artist Royalty'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      value={artistRoyalty}
                      onChange={handleChangeArtistRoyalty}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'curatorRoyalty'}
                      label={'Curator Royalty'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      value={curatorRoyalty}
                      onChange={handleChangeCuratorRoyalty}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'provenance'}
                      label={'Provenance'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      value={provenance}
                      onChange={handleChangeProvenance}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      id={'exhibitionHistory'}
                      label={'Exhibition History'}
                      icon={<HistoryIcon sx={{ color: 'white' }} />}
                      value={exhibitionHistory}
                      onChange={handleChangeExhibitionHistory}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      id={'publishingHistory'}
                      label={'Publishing History'}
                      icon={<PublishIcon sx={{ color: 'white' }} />}
                      value={publishingHistory}
                      onChange={handleChangePublishingHistory}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextFieldComponent
                      id={'notes'}
                      label={'Notes'}
                      icon={<NoteIcon sx={{ color: 'white' }} />}
                      value={notes}
                      onChange={handleChangeNotes}
                      keyPress={handleKeypress}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={onUpdateArtwork}>
                      Update Artwork
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={() => mintArtwork(art)}>
                      Mint NFT
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <div></div>
        </Grid>
      </Grid>
    </>
  )
}

export default UpdateArt