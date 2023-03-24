import { useEffect, useReducer, useCallback } from 'react'
import debounce from 'lodash/debounce'

const INTERSECTION_THRESHOLD = 5
const LOAD_DELAY_MS = 500

interface Props {
  triggerRef: any
  onGrabData: (currentPage: number) => void
  options?: any
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'set': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'onGrabData': {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        currentPage: state.currentPage + 1
      }
    }
    default:
      return state
  }
}

const useLazyLoad: React.FC<Props> = ({ triggerRef, onGrabData, options }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    currentPage: 1,
    data: []
  })

  const _handleEntry = async (entry: any) => {
    const boundingRect = entry.boundingClientRect
    const intersectionRect = entry.intersectionRect

    if (
      !state.loading &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch({ type: 'set', payload: { loading: true } })
      const data = await onGrabData(state.currentPage)
      dispatch({ type: 'onGrabData', payload: { data } })
    }
  }
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS)

  const onIntersect = useCallback(
    (entries: Array<any>) => {
      handleEntry(entries[0])
    },
    [handleEntry]
  )

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current
      const observer = new IntersectionObserver(onIntersect, options)

      observer.observe(container)

      return () => {
        observer.disconnect()
      }
    }
  }, [triggerRef, onIntersect, options])

  return state
}

export default useLazyLoad
