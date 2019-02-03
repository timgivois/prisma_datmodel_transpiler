import {
  DONE
} from '../constants'

const assignmentGrammar = {
  VARIABLE: {
    EQUAL: {
      TYPE: DONE // TODO: add required fields, arrays and relations
    }
  }
}

const grammar = {
  TYPE_DEFINITION: {
    VARIABLE: {
      OPEN_BRACES: {
        IN_LOOP: {
          ...assignmentGrammar
        },
        CLOSE_BRACES: DONE
      }
    }
  },
  SCALAR_DEFINITION: {
    VARIABLE: DONE
  },
  ENUM_DEFINITION: {
    OPEN_BRACES: {
      CLOSE_BRACES: DONE,
      IN_LOOP: {
        VARIABLE: DONE
      }
    }
  }
}

export default grammar
