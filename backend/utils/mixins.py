import inflection


class CamelCaseMixin:
    def to_representation(self, instance):
        representation = super().to_representation(instance)

        camel_case_representation = {
            inflection.camelize(key, uppercase_first_letter=False): value
            for key, value in representation.items()
        }

        return camel_case_representation
