"use client";

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';
import React from 'react'

const WorkflowButton = () => {

  const handleClick=()=>{

  }
  return (
    <Button  size={'icon'} onClick={handleClick}>
      <Plus />

    </Button>
  )
}

export default WorkflowButton