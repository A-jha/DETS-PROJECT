import React from "react"
import Notice from "../../components/Form/Notice"
import Layout from "../../components/Layout/index"
const NewNotice = () => {
  return (
    <Layout>
      <Notice
        data={{ title: "", description: "", link: "" }}
        url={"http://localhost:5000/notice/"}
      />
    </Layout>
  )
}

export default NewNotice
