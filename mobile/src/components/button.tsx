import { createContext, useContext } from 'react'
import clsx from 'clsx'
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native'

type Variants = 'primary' | 'secundary'

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants
  isLoading?: boolean
}

const ThemeContext = createContext<{ variant?: Variants }>({})

function Button({
  variant = 'primary',
  children,
  isLoading = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx(
        'h-11 flex-row items-center justify-center rounded-lg gap-2 px-2',
        {
          'bg-lime-300': variant === 'primary',
          'bg-zinc-800': variant === 'secundary',
        },
        className,
      )}
      disabled={isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? <ActivityIndicator className="text-lime-950" /> : children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  )
}

function Title({ children }: TextProps) {
  const { variant } = useContext(ThemeContext)

  return (
    <Text
      className={clsx('text-base font-semibold', {
        'text-lime-950': variant === 'primary',
        'text-zinc-200': variant === 'secundary',
      })}
    >
      {children}
    </Text>
  )
}

Button.Title = Title

export { Button }
