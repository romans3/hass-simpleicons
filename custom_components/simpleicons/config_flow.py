from homeassistant import config_entries


class SimpleIconsConfigFlow(
    config_entries.ConfigFlow,
    domain="simpleicons",
):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        await self.async_set_unique_id("simpleicons")
        self._abort_if_unique_id_configured()

        return self.async_create_entry(
            title="Simple Icons",
            data={},
        )

    async_step_import = async_step_user
