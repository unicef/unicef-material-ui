Auto complete field usage:

```html
error = {}
```

```jsx static
 <UAutoComplete
        value={autocompleteSelectedOption}
        label={label}
        options={autocompleteOptions}
        isRequired={minIndicatorLength > 0}
        onChange={handleOnSectorChange}
        minLength={minIndicatorLength}
        maxLength={maxIndicatorLength}
        allowContextSpecific={allowContextSpecific}
        usedItemIds={usedIndicatorsIds}
        readOnly={readOnly}
        onBlur={onBlurIndicator}
        {...props}
      />