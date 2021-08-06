import assert from 'assert'
import { nanoid } from 'nanoid'

import { cloneSurvey } from '../src/challenge2'

describe('challenge 2', () => {
  it('should create a new reference for the clone', () => {
    const parentId = nanoid()
    const survey = {
      _id: parentId,
      header: {
        id: parentId,
        title: 'Test'
      },
      children: []
    }

    const clone = cloneSurvey(survey)

    assert.notStrictEqual(clone, survey)
  })

  it('should not duplicate ids if multiple exist', () => {
    const parentId = nanoid()
    const survey = {
      _id: parentId,
      header: {
        id: parentId,
        title: 'Test'
      },
      children: []
    }

    const clone = cloneSurvey(survey)

    assert.strictEqual(clone.header.id, clone._id)
  })

  it('should update sub survey anchor', () => {
    const parentId = nanoid()
    const survey = {
      _id: parentId,
      header: {
        id: parentId,
        title: 'Test'
      },
      children: [
        {
          header: {
            id: '2',
            title: 'Container 1',
            subSurvey: {
              parentId: parentId,
              anchorId: parentId
            }
          },
          children: []
        }
      ]
    }

    const clone = cloneSurvey(survey)

    // Check the id updated
    assert.notStrictEqual(clone.header.id, survey.header.id)
    assert.notStrictEqual(clone.children[0].header.subSurvey.parentId, survey.children[0].header.subSurvey.parentId)

    // Check it matches on the anchor
    assert.strictEqual(clone.children[0].header.subSurvey.parentId, clone.header.id)
    assert.strictEqual(clone.children[0].header.subSurvey.anchorId, clone.header.id)
  })

  it('should update sub survey anchor if not attached at the root', () => {
    const parentId = nanoid()
    const child1 = nanoid()
    const child2 = nanoid()

    const survey = {
      _id: parentId,
      header: {
        id: parentId,
        title: 'Test'
      },
      children: [
        {
          header: {
            id: child1,
            title: 'Container 1',
            subSurvey: {
              parentId: parentId,
              anchorId: parentId
            }
          },
          children: []
        },
        {
          header: {
            id: child2,
            title: 'Container 2',
            subSurvey: {
              parentId: parentId,
              anchorId: child1
            }
          },
          children: []
        }
      ]
    }

    const clone = cloneSurvey(survey)

    // Check it matches on the anchor
    assert.strictEqual(clone.children[1].header.subSurvey.parentId, clone.header.id)
    assert.strictEqual(clone.children[1].header.subSurvey.anchorId, clone.children[0].header.id)
  })
})
