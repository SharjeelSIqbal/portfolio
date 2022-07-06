
import { useState } from 'react'
import { Heading, FormControl, Stack, Box, Text } from '@chakra-ui/react'
import { FormInput, FormSubmit, FormTextarea } from './form'
import { IoMdSend } from 'react-icons/io'
import Section from './section'
import NoSsr from './no-ssr'
import axios from 'axios'
import Lottie from 'lottie-react'
import checkMark from '../public/check-mark.json'
import errorMark from '../public/error.json'

const contactMeGreeting = "Hello Sharjeel, I'd love to connect and talk with you about <opportunity>. Please contact me at <email/phone>. I'm looking forward to hearing back from you!"

const initialState = {
  email: '',
  textarea: '',
  subject: '',
  phone: '',
}

export const ContactMe = () => {
  const [values, setvalues] = useState(initialState)
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState(false)
  const handleInputChange = e => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value,
    })
  }

  const handleAutoFill = e => {
    if(event.key === 'Enter' && values.textarea.length === 0) {
      setvalues({
        ...values,
        textarea: contactMeGreeting,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/mail", {
      values
    }).then(() => {
        setvalues(initialState)
        setIsSent(true)
    }).catch(() => setisError(true))
  }


  return (
    <Section  delay={0.5}>
      <Heading as="h4" variant="section-title">
        Contact Me!
      </Heading>
      {isSent && isError === false
        ? <Box align="center">
            <Lottie animationData={checkMark} style={{ width: "75px"}} loop={false} />
            <Text>Form submitted succesfully!</Text>
          </Box>
        : null
      }
      {!isSent && isError === false
        ? <form id="contact-me" type="submit" onSubmit={handleSubmit}>
          <FormInput key={"email"} placeholder="Email*" onChange={handleInputChange} type="email" size="md" name="email" value={values.email} required />
          <FormInput key={"subject"} placeholder="Subject*" onChange={handleInputChange} size="md" value={values.subject} name="subject" required />
          <FormInput key={"phone"} placeholder="Phone" onChange={handleInputChange} size="md" value={values.phone} name="phone" />
          <FormTextarea
            key={"textarea"}
            name="textarea"
            onChange={handleInputChange}
            onKeyPress={handleAutoFill}
            placeholder={contactMeGreeting + " Press 'Enter' to autofill form."}
            variant="filled"
            size="xl"
            value={values.textarea}>
          </FormTextarea>
          <Stack direction="row" justify="end">
            <NoSsr>
              <FormSubmit key="submitButton" rightIcon={<IoMdSend />} colorScheme="teal" type="submit" onSubmit={handleSubmit} variant="solid">Send</FormSubmit>
            </NoSsr>
          </Stack>
        </form>
        : null
      }
      {isError
        ? <Box align="center">
            <Lottie animationData={errorMark} style={{ width: "75px" }} loop={true} />
            <Text>Something went wrong please try again later!</Text>
          </Box>
        : null
      }
    </Section>
)
}
