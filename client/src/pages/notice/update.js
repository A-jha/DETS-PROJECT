import React from "react"
import Notice from "../../components/Form/Notice"
import Layout from "../../components/Layout/index"
const UpdateNotice = () => {
  return (
    <Layout>
      <Notice
        data={{ title: "", description: "", link: "" }}
        url={"http://localhost:5000/notice/1"}
      />
    </Layout>
  )
}

export default UpdateNotice
