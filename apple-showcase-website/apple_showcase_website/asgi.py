import os

import get_asgi_application # type: ignore

"""
ASGI config for AppleShowcaseWebsite project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "AppleShowcaseWebsite.settings")

application = get_asgi_application()