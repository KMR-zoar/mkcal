<template>
  <div class="forms">
    <h2>Event Type</h2>
    <el-row>
      <el-radio
        v-for="event in eventType"
        :key="event.type"
        :label="event.type"
        v-model="type">
          <img :src="event.icon" height="24">
          {{ event.text }}
      </el-radio>
    </el-row>
    <h2>Country</h2>
    <el-input v-model="ruleForm.country" placeholder="Country to be held"></el-input>
    <h2>City</h2>
    <el-input v-model="ruleForm.city" placeholder="City to be held"></el-input>
    <h2>Name</h2>
    <el-input v-model="ruleForm.name" placeholder="Event name"></el-input>
    <h2>Url</h2>
    <el-input v-model="ruleForm.url" placeholder="Url of event site"></el-input>
    <h2>When</h2>
    <el-date-picker v-model="ruleForm.start" placeholder="Event start date"></el-date-picker>
    to
    <el-date-picker v-model="end" placeholder="Event end date or Null"></el-date-picker>
    <h2>
      Formatted Text
      <el-button type="primary" icon="el-icon-paperclip" size="small" data-clipboard-target="#result" id="clipbutton"></el-button>
    </h2>
    <el-input type="textarea" v-model="eventText" rows="10" id="result"></el-input>
  </div>
</template>

<script>
import eventType from './eventtype.json'
import Clipboard from 'clipboard'

export default {
  name: 'formatter',
  data () {
    return {
      type: 'none',
      eventType: eventType,
      eventText: '',
      clipboard: null,
      end: '',
      ruleForm: {
        country: '',
        city: '',
        name: '',
        url: '',
        start: ''
      },
      rules: {
        country: [
          {
            required: true,
            message: 'Please input Country',
            trigger: 'change'
          }
        ]
      }
    }
  },
  mounted: () => {
    this.clipboard = new Clipboard('#clipbutton')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forms {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-radio {
  display: block;
}
</style>
