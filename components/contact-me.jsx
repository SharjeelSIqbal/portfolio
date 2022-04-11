
import { useState } from 'react'
import { Heading, FormControl, Stack, } from '@chakra-ui/react'
import { FormInput, FormSubmit, FormTextarea } from './form'
import { IoMdSend } from 'react-icons/io'
import Section from './section'
import NoSsr from './no-ssr'


const contactMeGreeting = "Hello Sharjeel, I'd love to connect and talk with you about <opportunity>. Please contact me at <email/phone>. I'm looking forward to hearing back from you!"

const initialState = {
  email: '',
  textarea: '',
  subject: '',
}

export const ContactMe = () => {
  const [values, setvalues] = useState(initialState)
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

  return (
    <Section delay={0.5}>
      <Heading as="h4" variant="section-title">
        Contact Me!
      </Heading>
      <FormControl>
        <FormInput onChange={handleInputChange} placeholder="Email" type="email" size="md" name="email" value={values.email} />
        <FormInput placeholder="Subject" onChange={handleInputChange} size="md" value={values.subject} name="subject" />
        <FormTextarea
          name="textarea"
          onChange={handleInputChange}
          onKeyPress={handleAutoFill}
          placeholder={contactMeGreeting + " Press 'Enter' to autofill form."}
          variant="filled"
          size="xl"
          value={values.textarea
          }>

        </FormTextarea>
        <Stack direction="row" justify="end">

        <NoSsr>

          <FormSubmit rightIcon={<IoMdSend />} colorScheme="teal" variant="solid">Send</FormSubmit>
        </NoSsr>

        </Stack>
      </FormControl>
    </Section>
)
}
