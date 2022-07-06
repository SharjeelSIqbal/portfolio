import { Input, Textarea, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'


export const FormInput = styled(Input)`
  margin-top: .5em;

`

export const FormTextarea = styled(Textarea) `
border-radius: .375rem;
background: inherit;
border-color: inherit;
margin-top: .5em;
height: 200px;
padding-left: 1rem;
`

export const FormSubmit = styled(Button) `
margin-top:  .5em;
justify-content: flex-end;
transition: all 0.5s ease;
`
