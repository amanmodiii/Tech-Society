import React from 'react'
import Faq from '../../components/faq/Faq';
function FaqPage() {
 
  const faqs=[
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    },
    {
      header: "This is header 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus non perspiciatis repellat quasi quisquam ad aspernatur mollitia repudiandae excepturi?"
    }
  ]
  

  return (
    <div> <Faq faqs={faqs} /> </div>
  )
}

export default FaqPage;