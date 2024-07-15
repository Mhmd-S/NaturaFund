import React from 'react'
import Modal from '@/components/common/Modal'

const ProjectInfo = ({ projectInfo, setViewProjectInfo }) => {
  return (
    <Modal>
      <h1 className="" >{projectInfo.name}</h1>
    </Modal>
  )
}

export default ProjectInfo