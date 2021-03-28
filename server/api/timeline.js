// TODO: make /users/:username or email api endpoints

const express = require('express')
const mongoose = require('mongoose')
mongoose.set('debug', true)

const { Timeline } = require('@db')

const router = express.Router()

router.route('/')
  .get(async function (req, res) {
    const timeline = await Timeline.find()
    res.send(timeline)
  })

router.route('/')
  .post(async function (req, res) {
    try {
      const { time, title, content, image } = req.body
      console.log("abczxc", time, title, content, image)
      const timeline = new Timeline({
        time,
        title,
        content,
        image
      })
      console.log("timeline", timeline)
      const timelineRes = await timeline.save()
      res.send(201, timelineRes)
    } catch (err) {
      console.log(err)
    }
  })

router.route('/')
  .patch(async function (req, res) {
    try {
      const { id, time, title, content, image } = req.body
      let mapValidate = {
        "time": time,
        "title": title,
        "content": content,
        "image": image
      }
      let timeline
    
      if(id) {
        timeline = await Timeline.findById(id)
        for ( let [item, value] of Object.entries(mapValidate)) {
          if(value === undefined || value === null) {
            throw new Error(`Params ${item} invalid`)
          }
        }
        timeline.time = time
        timeline.title = title
        timeline.content = content
        timeline.image = image
      }
      await timeline.save()
      res.send(201, timeline)
    } catch (err) {
      throw new Error(err)
    }
  })

router.route('/:id')
  .delete(async function (req, res) {
    try {
      const { id } = req.params
    
      await Timeline.deleteOne({ _id: id })
      res.send('Success')
    } catch (err) {
      throw new Error(err)
    }
  })


module.exports = router
