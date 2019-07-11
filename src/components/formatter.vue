<template>
  <div class="forms">
    <el-form>
      <el-form-item label="Event Type">
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
      </el-form-item>
    </el-form>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="Country" prop="country">
        <el-input v-model="ruleForm.country" placeholder="Country to be held"></el-input>
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input v-model="ruleForm.city" placeholder="City to be held"></el-input>
      </el-form-item>
      <el-form-item label="Event name" prop="name">
        <el-input v-model="ruleForm.name" placeholder="Event name"></el-input>
      </el-form-item>
      <el-form-item label="Url" prop="url">
        <el-input v-model="ruleForm.url" placeholder="Url of event site"></el-input>
      </el-form-item>
      <el-form-item label="When" prop="start">
        <el-date-picker v-model="ruleForm.start" placeholder="Event start date" value-format="yyyy-MM-dd"></el-date-picker>
        to
        <el-date-picker v-model="end" placeholder="Event end date or Null" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="Formatted text">
        <el-button type="primary" icon="el-icon-paperclip" size="small" data-clipboard-target="#result" id="clipbutton"></el-button>
        <el-input type="textarea" v-model="formattedText" rows="8" id="result" readonly=""></el-input>
      </el-form-item>
    </el-form>
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
            message: 'Please input country',
            trigger: 'blur'
          }
        ],
        city: [
          {
            required: true,
            message: 'Please input city',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: 'Please input event name',
            trigger: 'blur'
          }
        ],
        url: [
          {
            required: true,
            message: 'Please input event site url',
            trigger: 'blur'
          }
        ],
        start: [
          {
            required: true,
            message: 'Pick a start date',
            trigger: 'change'
          }
        ]
      }
    }
  },
  created () {
    this.clipboard = new Clipboard('#clipbutton')
  },
  computed: {
    formattedText: function () {
      const eventText = ['{{Calendar/event']

      eventText.push('| type = ' + this.type)

      this.end ? eventText.push('| start = ' + this.ruleForm.start, '| end = ' + this.end) : eventText.push('| date = ' + this.ruleForm.start)

      eventText.push(
        '| name = ' + this.ruleForm.name,
        '| url = ' + this.ruleForm.url,
        '| city = ' + this.ruleForm.city,
        '| country = ' + this.ruleForm.country,
        '}}'
        )


      return eventText.join('\n')
    }
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
  clear: both;
}
</style>
